<script>
    const footerData = {
        companyName: "AC INGENIERÍA",
        tagline: "Ingeniería Estructural de Excelencia",
        logoUrl: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/logo_svg_plano.svg",
        contactInfo: {
            email: "contacto@ac-ing.cl",
            phone: "+569 9818 1332"
        },
        address: {
            title: "VISÍTANOS",
            street: "ENCOMENDEROS 231, OFICINA 402",
            city: "LAS CONDES, SANTIAGO, CHILE",
            postalCode: "CÓDIGO POSTAL 7550166",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2768883786394!2d-70.60229182427287!3d-33.41161499669279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf40a4c7b0e7%3A0x8d5a2e8e6c8f6f8a!2sEncomenderos%20231%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1629789012345!5m2!1ses!2scl"
        },
        socialLinks: [],
        creditInfo: {
            text: "AC Ingeniería",
            year: new Date().getFullYear()
        }
    };
</script>

<footer class="bg-black border-t border-[#3a3a3a] text-white relative z-[1] box-border text-shadow-sm antialiased">
    <div class="max-w-none py-8 md:py-[50px] w-[calc(100%-32px)] md:w-[calc(100%-120px)] mx-4 md:mx-[60px] flex flex-col">
        <!-- Sección superior del footer -->
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-6 md:mb-[30px] border-b border-[#3a3a3a] pb-6">
            <!-- Información de la empresa -->
            <div class="mb-6 md:mb-0">
                <!-- Logo de la empresa -->
                <div class="mb-4">
                    <img 
                        src={footerData.logoUrl} 
                        alt="Logo AC Ingeniería" 
                        class="h-20 md:h-24"
                    />
                </div>
                <div class="text-sm mb-2">
                    <a href="mailto:{footerData.contactInfo.email}" 
                       class="bg-gradient-to-b from-white to-white bg-no-repeat bg-[length:100%_1px] bg-bottom relative text-white hover:opacity-80">
                        {footerData.contactInfo.email}
                    </a>
                </div>
                <div class="text-sm">
                    <a id="contacto" href="tel:{footerData.contactInfo.phone}" 
                       class="bg-gradient-to-b from-white to-white bg-no-repeat bg-[length:100%_1px] bg-bottom relative text-white hover:opacity-80">
                        {footerData.contactInfo.phone}
                    </a>
                </div>
            </div>
            
            <!-- Información de dirección y mapa -->
            <div class="md:w-1/2">
                <h3 class="text-lg font-medium mb-2 font-['Benton_Sans_Book',_sans-serif]">{footerData.address.title}</h3>
                <address class="text-sm not-italic mb-4 text-gray-400 font-['Benton_Sans_Book',_sans-serif]">
                    {footerData.address.street}<br>
                    {footerData.address.city}<br>
                    {footerData.address.postalCode}
                </address>
                <div class="w-full h-48 md:h-64">
                    <iframe
                        title="Ubicación de AC Ingeniería"
                        src={footerData.address.mapUrl}
                        width="100%"
                        height="100%"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        class="border border-[#3a3a3a] rounded"
                    ></iframe>
                </div>
            </div>
        </div>
        
        <!-- Sección inferior del footer -->
        <div class="flex flex-col md:flex-row md:justify-between items-center">
            <!-- Redes sociales -->
            <div class="flex items-center mb-4 md:mb-0">
                {#each footerData.socialLinks as social}
                    <a 
                        href={social.url}
                        title={social.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center bg-transparent border border-[#3a3a3a] rounded-full h-[30px] w-[30px] mr-3 md:mr-4 transition-all duration-300 ease-in-out hover:bg-[#3a3a3a]"
                    >
                        <span class="text-xs">{social.name[0]}</span>
                    </a>
                {/each}
            </div>
            
            <!-- Copyright -->
            <div class="text-sm text-gray-400 font-['Benton_Sans_Book',_sans-serif] tracking-[-0.14px]">
                © {footerData.creditInfo.year} {footerData.creditInfo.text}. Todos los derechos reservados.
            </div>
        </div>
    </div>
</footer> 