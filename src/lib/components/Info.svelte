<script>
    import { Icon, Photo, H2, H3, User } from "svelte-hero-icons";
    import { onMount } from 'svelte';
    import { Pulse as ClientPulse } from '$lib/clientPulses';
    let showModal = false;
    let selectedImages = [];
    let selectedh1 = '';
    let allImages = [];
    let editingImage = null;
    let newFileName = '';
    let errorMessage = '';
    let fileInput;
    let profileImage = null;
    let profileImageInput;
    let hasFavicon = false;

    let buildings = [
        {
            h1: "Edificio Santa Rita",
            images: [
                "./santarita.jpg",
                "./santarita2.jpg",
                "./santarita3.jpg",
                "./santarita4.jpg",
                "./santarita5.jpg",
                "./santarita6.jpg",
                "./santarita7.jpg",
                "./santarita8.jpg"
            ]
        },
        {
            h1: "Edificio Alonso",
            image: "https://ambientesdigital.com/wp-content/uploads/2023/06/R1A0137-.jpg"
        },
        {
            h1: "Edificio Estoril 2",
            image: "./estoril_II_nueva.png"
        },
        {
            h1: "Edificio Estoril",
            image: "./estoril_I.jpg"
        },
        {
            h1: "Edificio Kaufman",
            image: "https://www.kaufmann.cl/documents/68916/166093/head-nuestro-equipo.jpg/0c8e2e65-b191-5e8a-735b-7e6218fdb758?t=1597699010935"
        }
    ];

    let systems = [
        {
            h1: "Edificio Sheraton, sistema proteccion de taludes",
            image: "https://images2.mega.cl/meganoticias/2024/07/25/anteproyecto-sheraton-santiago_453841_2_66a29fd6e1f2d.jpg"
        },
        {
            h1: "Edificio Bodenor",
            images: [
                "./bodenor1.jpg",
                "./bodenor2.jpg",
                "./bodenor3.jpg",
                "./bodenor4.jpg",
                "./bodenor5.jpg"
            ]
        },
        {
            h1: "Edificio Cine Hoyts La Reina",
            image: "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IIJXQ7BEYNGMZNZPZ3PUK7FCUA.png"
        }
    ];

    let manuals = [
        {
            h1: "Manual ICHA 2021",
            image: "https://icha.cl/wp-content/uploads/2022/09/portada-diseno-estructuras-de-acero-1200px-1030x670.jpg"
        },
        {
            h1: "Manual de Sistema Z Tubest",
            image: "manual_z_tubest.webp"
        },
        {
            h1: "Manual Diseño Estructural Cintact",
            image: "manual_cintact.png"
        }
    ];

    function openModal(images, h1) {
        selectedImages = images;
        selectedh1 = h1;
        showModal = true;
    }

    onMount(async () => {
        try {
            const result = await ClientPulse.ImageList({});
            if (result.success && result.data) {
                allImages = result.data.images;
                console.log('Archivos disponibles:', allImages); // Debug

                // Buscar logo y favicon
                const logoFile = allImages.find(img => img.startsWith('logo.'));
                const faviconFile = allImages.find(img => img.startsWith('favicon.'));
                
                if (logoFile) {
                    console.log('Logo encontrado:', logoFile);
                    profileImage = logoFile;
                }
                
                if (faviconFile) {
                    console.log('Favicon encontrado:', faviconFile);
                    hasFavicon = true;
                }
            } else {
                console.error('Error al obtener imágenes:', result.error);
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    });

    async function startEditing(imageName) {
        editingImage = imageName;
        newFileName = imageName;
    }

    async function renameFile(imageName) {
        if (!newFileName || newFileName === imageName) {
            editingImage = null;
            return;
        }

        try {
            const result = await ClientPulse.RenameImage({
                oldName: imageName,
                newName: newFileName
            });

            if (result.success && result.data) {
                // Actualizar la lista de imágenes
                const index = allImages.indexOf(imageName);
                if (index !== -1) {
                    allImages[index] = result.data.newName;
                    allImages = [...allImages]; // Forzar actualización
                }
                editingImage = null;
                errorMessage = '';
            } else {
                errorMessage = result.error || 'Error al renombrar el archivo';
            }
        } catch (error) {
            errorMessage = 'Error al renombrar el archivo';
            console.error('Error:', error);
        }
    }

    // Función para manejar el inicio del arrastre
    function handleDragStart(e, imageName) {
        console.log('Started dragging:', imageName); // Debug log
        e.dataTransfer.setData('text/plain', imageName);
    }

    // Función para permitir el drop
    function handleDragOver(e) {
        e.preventDefault();
        console.log('Dragging over element'); // Debug log
    }

    // Función para manejar el drop en un elemento
    function handleDrop(e, item) {
        e.preventDefault();
        const imageName = e.dataTransfer.getData('text/plain');
        console.log('Dropping image:', imageName, 'onto item:', item.h1); // Debug log

        // Si el elemento ya tiene un array de imágenes
        if (Array.isArray(item.images)) {
            if (!item.images.includes(imageName)) {
                item.images = [...item.images, imageName];
                buildings = buildings; // Forzar actualización
                systems = systems;
                manuals = manuals;
            }
        } 
        // Si el elemento tiene una sola imagen
        else if (item.image) {
            item.images = [item.image, imageName];
            delete item.image;
            buildings = buildings; // Forzar actualización
            systems = systems;
            manuals = manuals;
        }
        // Si el elemento no tiene imágenes
        else {
            item.images = [imageName];
            buildings = buildings; // Forzar actualización
            systems = systems;
            manuals = manuals;
        }
    }

    // Función para resaltar la zona de drop
    function handleDragEnter(e, element) {
        e.preventDefault();
        element.classList.add('drag-over');
        console.log('Entered drop zone'); // Debug log
    }

    // Función para quitar el resaltado
    function handleDragLeave(e, element) {
        e.preventDefault();
        element.classList.remove('drag-over');
        console.log('Left drop zone'); // Debug log
    }

    async function deleteImage(imageName) {
        if (!confirm(`¿Estás seguro de que deseas eliminar ${imageName}?`)) {
            return;
        }

        try {
            const result = await ClientPulse.DeleteImage({
                filename: imageName
            });

            if (result.success && result.data) {
                // Eliminar la imagen de la lista
                allImages = allImages.filter(img => img !== imageName);
                
                // Eliminar la imagen de buildings, systems y manuals
                buildings.forEach(item => {
                    if (Array.isArray(item.images)) {
                        item.images = item.images.filter(img => img !== imageName);
                    } else if (item.image === imageName) {
                        delete item.image;
                    }
                });
                
                systems.forEach(item => {
                    if (Array.isArray(item.images)) {
                        item.images = item.images.filter(img => img !== imageName);
                    } else if (item.image === imageName) {
                        delete item.image;
                    }
                });
                
                manuals.forEach(item => {
                    if (Array.isArray(item.images)) {
                        item.images = item.images.filter(img => img !== imageName);
                    } else if (item.image === imageName) {
                        delete item.image;
                    }
                });
            } else {
                errorMessage = result.error || 'Error al eliminar la imagen';
            }
        } catch (error) {
            errorMessage = 'Error al eliminar la imagen';
            console.error('Error:', error);
        }
    }

    async function replaceImage(imageName) {
        // Crear un input de archivo oculto
        fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        
        fileInput.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            // Verificar que es una imagen
            if (!file.type.startsWith('image/')) {
                errorMessage = 'Por favor, selecciona un archivo de imagen';
                return;
            }

            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('filename', imageName);

                const response = await fetch('/api/replace', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (response.ok) {
                    // Actualizar la lista de imágenes
                    const index = allImages.indexOf(imageName);
                    if (index !== -1) {
                        allImages[index] = data.newName;
                        allImages = [...allImages]; // Forzar actualización
                    }
                    editingImage = null;
                    errorMessage = '';
                } else {
                    errorMessage = data.error;
                }
            } catch (error) {
                errorMessage = 'Error al renombrar el archivo';
                console.error('Error:', error);
            }
        };

        fileInput.click();
    }

    async function uploadImage() {
        fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.multiple = true; // Permite seleccionar múltiples archivos
        
        fileInput.onchange = async (e) => {
            const files = Array.from(e.target.files);
            if (files.length === 0) return;

            for (const file of files) {
                // Verificar que es una imagen
                if (!file.type.startsWith('image/')) {
                    errorMessage = 'Por favor, selecciona solo archivos de imagen';
                    continue;
                }

                try {
                    const formData = new FormData();
                    formData.append('file', file);

                    const response = await fetch('/api/upload', {
                        method: 'POST',
                        body: formData
                    });

                    const data = await response.json();

                    if (response.ok) {
                        // Agregar la nueva imagen a la lista
                        allImages = [...allImages, data.filename];
                        errorMessage = '';
                    } else {
                        errorMessage = data.error;
                    }
                } catch (error) {
                    errorMessage = 'Error al subir el archivo';
                    console.error('Error:', error);
                }
            }
        };

        fileInput.click();
    }

    async function uploadProfileImage() {
        profileImageInput = document.createElement('input');
        profileImageInput.type = 'file';
        profileImageInput.accept = 'image/*,.svg';
        
        profileImageInput.onchange = async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            // Verificar que es una imagen o SVG
            if (!file.type.startsWith('image/') && !file.type.includes('svg')) {
                errorMessage = 'Por favor, selecciona un archivo de imagen o SVG';
                return;
            }

            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('isLogo', 'true');

                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (response.ok) {
                    profileImage = data.filename;
                    errorMessage = '';
                } else {
                    errorMessage = data.error;
                }
            } catch (error) {
                errorMessage = 'Error al subir el logo';
                console.error('Error:', error);
            }
        };

        profileImageInput.click();
    }

    // Agregar una nueva función para manejar el favicon
    async function uploadFavicon() {
        profileImageInput = document.createElement('input');
        profileImageInput.type = 'file';
        profileImageInput.accept = 'image/*,.svg';
        
        profileImageInput.onchange = async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('isFavicon', 'true');

                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (response.ok) {
                    hasFavicon = true;
                    errorMessage = '';
                } else {
                    errorMessage = data.error;
                }
            } catch (error) {
                errorMessage = 'Error al subir el favicon';
                console.error('Error:', error);
            }
        };

        profileImageInput.click();
    }
</script>

<style>
    .drag-over {
        border: 2px dashed #4299e1 !important;
        background-color: rgba(66, 153, 225, 0.1);
    }
</style>

<div class="flex">
    <!-- Menú lateral -->
    <div class="w-[100px] h-screen overflow-y-auto border-r border-gray-200 p-2">
        <h3 class="text-xs text-gray-600 mb-2">Imágenes</h3>
        {#if errorMessage}
            <div class="text-red-500 text-xs mb-2 p-1 bg-red-50 rounded">
                {errorMessage}
            </div>
        {/if}
        <div class="grid grid-cols-1 gap-2">
            {#each allImages as imageName}
                <div class="flex flex-col items-center relative group">
                    <img src={`/${imageName}`} 
                         alt={imageName}
                         draggable="true"
                         on:dragstart={(e) => handleDragStart(e, imageName)}
                         class="w-[80px] h-[80px] object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-move" />
                    
                    <!-- Contenedor para botones -->
                    <div class="absolute -top-2 -right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <!-- Botón de reemplazar -->
                        <button 
                            class="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                            on:click={() => replaceImage(imageName)}
                            title="Reemplazar imagen"
                        >
                            ↺
                        </button>
                        <!-- Botón de eliminar -->
                        <button 
                            class="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                            on:click={() => deleteImage(imageName)}
                            title="Eliminar imagen"
                        >
                            ×
                        </button>
                    </div>

                    {#if editingImage === imageName}
                        <div class="mt-1 w-full">
                            <input
                                type="text"
                                bind:value={newFileName}
                                class="w-full text-[10px] p-1 border rounded"
                                on:keydown={(e) => e.key === 'Enter' && renameFile(imageName)}
                            />
                            <div class="flex gap-1 mt-1">
                                <button
                                    class="text-[10px] px-1 bg-blue-500 text-white rounded"
                                    on:click={() => renameFile(imageName)}>
                                    ✓
                                </button>
                                <button
                                    class="text-[10px] px-1 bg-gray-500 text-white rounded"
                                    on:click={() => editingImage = null}>
                                    ✕
                                </button>
                            </div>
                        </div>
                    {:else}
                        <p class="text-[10px] text-gray-500 mt-1 text-center break-words w-full cursor-pointer hover:text-blue-500"
                           on:click={() => startEditing(imageName)}>
                            {imageName}
                        </p>
                    {/if}
                </div>
            {/each}
        </div>
    </div>

    <!-- Botón flotante de subida -->
    <button 
        class="fixed left-[85px] top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-600 transition-colors shadow-lg z-50"
        on:click={uploadImage}
        title="Subir nueva imagen"
    >
        +
    </button>

    <!-- Contenido principal -->
    <div class="flex-1 p-4 container mx-auto max-w-4xl">
        <div class="flex justify-end mb-4">
            <div class="relative group">
                {#if profileImage}
                    <img 
                        src={`/${profileImage}`} 
                        alt="Logo"
                        class="w-12 h-12 rounded-full object-cover cursor-pointer hover:opacity-90"
                        on:click={uploadProfileImage}
                    />
                {:else}
                    <button 
                        class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        on:click={uploadProfileImage}
                    >
                        <Icon src={User} class="w-6 h-6 text-gray-600" />
                    </button>
                {/if}
                
                <!-- Dropdown Menu -->
                <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div class="py-1">
                        <button
                            class="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                            on:click={uploadProfileImage}
                        >
                            Cambiar logo
                        </button>
                        {#if hasFavicon}
                            <div class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" on:click={uploadFavicon}>
                                <img 
                                    src="/favicon.svg" 
                                    alt="Favicon actual" 
                                    class="w-4 h-4 mr-2"
                                />
                                <span>Cambiar favicon</span>
                            </div>
                        {:else}
                            <button
                                class="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                                on:click={uploadFavicon}
                            >
                                Agregar favicon
                            </button>
                        {/if}
                    </div>
                </div>
            </div>
        </div>

        <section class="mb-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                {#each buildings as item}
                    <div class="flex flex-col items-center text-center min-h-[250px] p-4 border-2 border-transparent"
                         on:dragover={handleDragOver}
                         on:drop={(e) => handleDrop(e, item)}
                         on:dragenter={(e) => handleDragEnter(e, e.currentTarget)}
                         on:dragleave={(e) => handleDragLeave(e, e.currentTarget)}>
                        <h2 class="mb-2 text-gray-700 text-sm">{item.h1}</h2>
                        {#if Array.isArray(item.images)}
                            <!-- Efecto abanico para múltiples imágenes -->
                            <div class="relative cursor-pointer group" 
                                 on:click={() => openModal(item.images, item.h1)}>
                                <!-- Imagen de fondo rotada -->
                                <div class="absolute -right-2 -rotate-6">
                                    <div class="relative">
                                        <img src={item.images[1]} 
                                             alt={`${item.h1} - 2`}
                                             class="w-[200px] h-[150px] object-cover rounded-lg shadow-md" />
                                        <!-- Overlay oscuro -->
                                        <div class="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                                    </div>
                                </div>
                                <!-- Imagen principal -->
                                <img src={item.images[0]} 
                                     alt={item.h1}
                                     class="w-[200px] h-[150px] object-cover rounded-lg shadow-md relative z-10" />
                            </div>
                        {:else if item.image}
                            <img src={item.image} 
                                 alt={item.h1}
                                 class="w-[200px] h-[150px] object-cover rounded-lg shadow-md" />
                        {:else}
                            <div class="w-[200px] h-[150px] border border-gray-200 rounded-lg shadow-md flex items-center justify-center">
                                <Icon src={Photo} class="w-8 h-8 text-gray-300" />
                            </div>
                        {/if}
                        
                        <!-- Botones de encabezado -->
                        <div class="flex gap-2 mt-2">
                            <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Icon src={H2} class="w-5 h-5 text-gray-600" />
                            </button>
                            <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Icon src={H3} class="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <section class="mb-8">
            <h2 class="mb-4 text-gray-700 text-center text-sm">Sistemas de invención e innovacion:</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                {#each systems as item}
                    <div class="flex flex-col items-center text-center min-h-[250px] p-4 border-2 border-transparent"
                         on:dragover={handleDragOver}
                         on:drop={(e) => handleDrop(e, item)}
                         on:dragenter={(e) => handleDragEnter(e, e.currentTarget)}
                         on:dragleave={(e) => handleDragLeave(e, e.currentTarget)}>
                        <h3 class="mb-2 text-gray-600 text-sm">{item.h1}</h3>
                        {#if item.image}
                            <img src={item.image} 
                                 alt={item.h1}
                                 class="w-[200px] h-[150px] object-cover rounded-lg shadow-md" />
                        {:else}
                            <div class="w-[200px] h-[150px] border border-gray-200 rounded-lg shadow-md flex items-center justify-center">
                                <Icon src={Photo} class="w-8 h-8 text-gray-300" />
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </section>

        <section class="mb-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                {#each manuals as item}
                    <div class="flex flex-col items-center text-center min-h-[250px] p-4 border-2 border-transparent"
                         on:dragover={handleDragOver}
                         on:drop={(e) => handleDrop(e, item)}
                         on:dragenter={(e) => handleDragEnter(e, e.currentTarget)}
                         on:dragleave={(e) => handleDragLeave(e, e.currentTarget)}>
                        <h3 class="mb-2 text-gray-600 text-sm">{item.h1}</h3>
                        {#if item.image}
                            <img src={item.image} 
                                 alt={item.h1}
                                 class="w-[200px] h-[150px] object-cover rounded-lg shadow-md" />
                        {:else}
                            <div class="w-[200px] h-[150px] border border-gray-200 rounded-lg shadow-md flex items-center justify-center">
                                <Icon src={Photo} class="w-8 h-8 text-gray-300" />
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </section>
    </div>
</div>

<!-- Modal para galería de imágenes -->
{#if showModal}
    <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
         on:click={() => showModal = false}>
        <div class="bg-white p-4 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
             on:click|stopPropagation>
            <h2 class="text-xl font-bold mb-4">{selectedh1}</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                {#each selectedImages as image}
                    <img src={image} 
                         alt={selectedh1}
                         class="w-full h-48 object-cover rounded-lg shadow-md" />
                {/each}
            </div>
            <button class="mt-4 px-4 py-2 bg-gray-200 rounded-lg"
                    on:click={() => showModal = false}>
                Cerrar
            </button>
        </div>
    </div>
{/if}
