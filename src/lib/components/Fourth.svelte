<script>
    const footerData = {
        companyName: "Nombre de su Empresa",
        socialLinks: [
            {
                name: "Twitter",
                url: "https://twitter.com/su-cuenta",
                title: "Ir a Twitter",
                icon: `<svg width="17" height="15" viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg" class="fill-white transition-colors duration-300 h-[13.75px] w-[16.8px]">
                        <path d="M16.6194 2.31003C16.3555 2.42709 16.0841 2.52588 15.8069 2.60609C16.1351 2.23486 16.3854 1.79807 16.5382 1.32008C16.5724 1.21294 16.5369 1.09567 16.4488 1.0256C16.3609 0.95547 16.2387 0.94707 16.1418 1.00446C15.553 1.35368 14.9178 1.60465 14.2517 1.75141C13.5807 1.09578 12.6694 0.722656 11.7273 0.722656C9.7387 0.722656 8.12081 2.34049 8.12081 4.32905C8.12081 4.48567 8.13073 4.64142 8.15035 4.795C5.68266 4.57834 3.3885 3.36544 1.8131 1.43297C1.75696 1.36409 1.67047 1.32696 1.58192 1.33406C1.49331 1.341 1.4137 1.39097 1.36894 1.46776C1.04941 2.01603 0.880494 2.6431 0.880494 3.28112C0.880494 4.1501 1.19075 4.9746 1.73881 5.61885C1.57216 5.56113 1.41045 5.489 1.25611 5.40332C1.17325 5.3572 1.07212 5.35791 0.989802 5.40511C0.907428 5.45231 0.855782 5.53913 0.853614 5.63402C0.853235 5.65001 0.853235 5.666 0.853235 5.6822C0.853235 6.97931 1.55135 8.14712 2.61869 8.78362C2.52699 8.77446 2.43535 8.76119 2.34431 8.74379C2.25044 8.72585 2.15393 8.75875 2.09063 8.83034C2.02722 8.90187 2.00625 9.00159 2.03546 9.09263C2.43053 10.3261 3.44768 11.2333 4.67732 11.5099C3.65746 12.1487 2.49117 12.4833 1.26684 12.4833C1.01137 12.4833 0.754441 12.4683 0.502984 12.4385C0.378069 12.4237 0.258627 12.4974 0.216085 12.6162C0.173544 12.7351 0.218632 12.8676 0.324905 12.9357C1.89775 13.9442 3.71642 14.4772 5.58419 14.4772C9.256 14.4772 11.553 12.7457 12.8333 11.2932C14.4298 9.48201 15.3455 7.08467 15.3455 4.71594C15.3455 4.61698 15.344 4.51705 15.3409 4.41744C15.9708 3.94287 16.5131 3.36853 16.9544 2.7084C17.0215 2.60815 17.0142 2.47564 16.9365 2.38335C16.859 2.29101 16.7297 2.26115 16.6194 2.31003Z"></path>
                    </svg>`
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/company/su-empresa/",
                title: "Ir a LinkedIn",
                icon: `<svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg" class="fill-white transition-colors duration-300 h-[14px] w-[14.61px]">
                        <path d="M3.0313 1.52174C3.0313 2.36235 2.35565 3.04348 1.52174 3.04348C0.687826 3.04348 0.0121739 2.36235 0.0121739 1.52174C0.0121739 0.681739 0.687826 0 1.52174 0C2.35565 0 3.0313 0.681739 3.0313 1.52174ZM3.04348 4.26087H0V14H3.04348V4.26087ZM7.90209 4.26087H4.87809V14H7.9027V8.88756C7.9027 6.04496 11.5725 5.81243 11.5725 8.88756V14H14.6087V7.8333C14.6087 3.03678 9.17791 3.21148 7.90209 5.57261V4.26087Z"></path>
                    </svg>`
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/su-empresa",
                title: "Ir a Facebook",
                icon: `<svg width="9" height="16" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg" class="fill-white transition-colors duration-300 h-[15px] w-[7.5px]">
                        <path d="M1.18967 8.489H2.81716V15.2581C2.81716 15.3917 2.92435 15.5 3.05663 15.5H5.81611C5.94839 15.5 6.05558 15.3917 6.05558 15.2581V8.52089H7.92652C8.04817 8.52089 8.15052 8.42866 8.16441 8.30658L8.44857 5.81455C8.45637 5.74598 8.43487 5.67732 8.38947 5.62589C8.34401 5.5744 8.27897 5.54494 8.21072 5.54494H6.05567V3.98281C6.05567 3.5119 6.30664 3.27311 6.80168 3.27311C6.87222 3.27311 8.21072 3.27311 8.21072 3.27311C8.34301 3.27311 8.4502 3.16477 8.4502 3.03118V0.743726C8.4502 0.610081 8.34301 0.50179 8.21072 0.50179H6.26885C6.25515 0.501113 6.22474 0.5 6.17991 0.5C5.84298 0.5 4.67182 0.566823 3.74669 1.42666C2.72166 2.3795 2.86415 3.52037 2.8982 3.71818V5.54489H1.18967C1.05738 5.54489 0.950195 5.65318 0.950195 5.78682V8.24702C0.950195 8.38066 1.05738 8.489 1.18967 8.489Z"></path>
                    </svg>`
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/su-empresa/",
                title: "Ir a Instagram",
                icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="fill-white transition-colors duration-300 h-[16px] w-[16px]">
                        <path d="M8 1.442C10.136 1.442 10.3893 1.45 11.2333 1.48867C13.4013 1.58733 14.414 2.616 14.5127 4.768C14.5513 5.61133 14.5587 5.86467 14.5587 8.00067C14.5587 10.1373 14.5507 10.39 14.5127 11.2333C14.4133 13.3833 13.4033 14.414 11.2333 14.5127C10.3893 14.5513 10.1373 14.5593 8 14.5593C5.864 14.5593 5.61067 14.5513 4.76733 14.5127C2.594 14.4133 1.58667 13.38 1.488 11.2327C1.44933 10.3893 1.44133 10.1367 1.44133 8C1.44133 5.864 1.45 5.61133 1.488 4.76733C1.58733 2.616 2.59733 1.58667 4.76733 1.488C5.61133 1.45 5.864 1.442 8 1.442ZM8 0C5.82733 0 5.55533 0.00933333 4.702 0.048C1.79667 0.181333 0.182 1.79333 0.0486667 4.70133C0.00933333 5.55533 0 5.82733 0 8C0 10.1727 0.00933333 10.4453 0.048 11.2987C0.181333 14.204 1.79333 15.8187 4.70133 15.952C5.55533 15.9907 5.82733 16 8 16C10.1727 16 10.4453 15.9907 11.2987 15.952C14.2013 15.8187 15.82 14.2067 15.9513 11.2987C15.9907 10.4453 16 10.1727 16 8C16 5.82733 15.9907 5.55533 15.952 4.702C15.8213 1.79933 14.2073 0.182 11.2993 0.0486667C10.4453 0.00933333 10.1727 0 8 0V0ZM8 3.892C5.73133 3.892 3.892 5.73133 3.892 8C3.892 10.2687 5.73133 12.1087 8 12.1087C10.2687 12.1087 12.108 10.2693 12.108 8C12.108 5.73133 10.2687 3.892 8 3.892ZM8 10.6667C6.52733 10.6667 5.33333 9.47333 5.33333 8C5.33333 6.52733 6.52733 5.33333 8 5.33333C9.47267 5.33333 10.6667 6.52733 10.6667 8C10.6667 9.47333 9.47267 10.6667 8 10.6667ZM12.2707 2.77C11.74 2.77 11.31 3.2 11.31 3.73C11.31 4.26 11.74 4.69 12.2707 4.69C12.8007 4.69 13.23 4.26 13.23 3.73C13.23 3.2 12.8007 2.77 12.2707 2.77Z"></path>
                    </svg>`
            },
            {
                name: "YouTube",
                url: "https://www.youtube.com/c/su-empresa/",
                title: "Ir a YouTube",
                icon: `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-white transition-colors duration-300 h-[11.5px] w-[16px]">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.251 0.343331C14.9395 0.532246 15.4816 1.08888 15.6656 1.79576C16 3.0769 16 5.75 16 5.75C16 5.75 16 8.42301 15.6656 9.70424C15.4816 10.4111 14.9395 10.9678 14.251 11.1568C13.0034 11.5 8 11.5 8 11.5C8 11.5 2.99664 11.5 1.74891 11.1568C1.06045 10.9678 0.518273 10.4111 0.334273 9.70424C0 8.42301 0 5.75 0 5.75C0 5.75 0 3.0769 0.334273 1.79576C0.518273 1.08888 1.06045 0.532246 1.74891 0.343331C2.99664 0 8 0 8 0C8 0 13.0034 0 14.251 0.343331ZM6.5 3.5V8.5L10.5 6.0001L6.5 3.5Z"></path>
                    </svg>`
            },
            {
                name: "Medium",
                url: "https://medium.com/su-empresa/",
                title: "Ir a Medium",
                icon: `<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg" class="fill-white transition-colors duration-300 h-[9.61px] w-[17px]">
                        <circle cx="4.80272" cy="4.80272" r="4.80272"></circle>
                        <ellipse cx="12.3878" cy="4.76637" rx="2.47759" ry="4.5359"></ellipse>
                        <ellipse cx="16.0086" cy="4.80412" rx="0.991038" ry="4.11662"></ellipse>
                    </svg>`
            }
        ],
        footerLinks: [
            {
                text: "Carreras",
                url: "/carreras/",
                target: "_self"
            },
            {
                text: "Prensa",
                url: "/prensa",
                target: "_self"
            },
            {
                text: "Política de Derechos Humanos",
                url: "/politica-derechos-humanos/",
                target: "_self"
            },
            {
                text: "Privacidad y Términos Legales",
                url: "/politica-privacidad/",
                target: "_self"
            },
            {
                text: "Política de Empleo",
                url: "/politica-empleo/",
                target: "_self"
            }
        ],
        creditInfo: {
            text: "Crédito: Nombre del Desarrollador",
            url: "https://www.ejemplo.com",
            year: new Date().getFullYear()
        }
    };

    const logoUrl = "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUTG5TJOFZXYCEQZF%2F20250226%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250226T224108Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLWVhc3QtMSJIMEYCIQCR4sF7O3jBl0xKWYV9pjBJbb3k5j1Mgo0R8QoaVoz10gIhANz46Pv5wEQbPxmgcPkqo49SozAMk3d4tseRKzxIHw8yKuwCCGgQARoMMzE2MTQ0ODMxMzcxIgxozeBvOzD5vZWpAgIqyQL7sO9vwB%2FLpBouem0Rrneft62mK%2FQO73BhpV5KEadVvUyh66Xrvo8qCnSvQpqau0V2UsJrB%2F7WQ96ybf5Usq%2Ft3jWbXY3dOShxfKLhrhtLB5AgoDtc9i5sQ4WI0zGm%2FzRN1ReAU1tzEZIOdw15zZ2UDnpcjH35WMOXzJ4ebS%2BNgCd3EbsFc3C5YCk%2BzO8m3owC6bzkeDbL%2BVMBrb0lpOIHFpo0CFZhKQ3PhxsnbzI8G3xC%2FNjo7B5DJ87RoD5RZ3yh06n3E42M9v2wPuUL70vxULB8kBWd8%2Byr1dCI8e8ExWTkkv4iOft7pjAm9eJkDAIbMcVX%2Bwu6xYHXOlYpY%2BsJ5MOxvX6Eu46HwxKEhZeI5N3AKvSd%2B0pVMyXlfYqwAjbkmASE1DMUyb5ZvuqsPsyKw6ijet0mYHM3qOrdbcwj%2B1GGr3PVkZhFVjDJif69BjqyAkgeIzFVv5hWbenOqKyjzoRzq5eBbhYV3KVE3PhTfzjpQ4KZD6yXcpHH8jPVPiB6bS9w1%2FEOPgWrc2zIkHZiJgm51RGuGggBsb04%2F6nHttcQ8SuI84UozGxarpkc5wZO2W%2B3FFkU%2FAK06%2FQ7VB5Q%2B2qooytXblj%2FaVYOmqEAVpWbj57u4dbSsjc52tJLbvi56i1Yg9njjcnOUZIlNuJLjDaoB2mdYSWviSCMbUsNvAed2s%2F9CPhkCpK%2BNun%2BFns7tkUMYySmWGda9gp7Hmn1rnuVOzPiiUkZFra7ub6j0yJOvgsIuuahLMLknIs5ErT0JsLbqEN%2BDGxd3TA6xFAYoKx1qSmZoCv%2FuzPFEQdeUD%2FXQJLpidfy%2F3YvWQeYqK9OBSeuVKhLN3RDtyFb8i5ZvTLkTg%3D%3D&X-Amz-Signature=af2a5dc6eacbf2ad22f9fbdb0af22d6746d42ae9a9552d5ffb02142c42a9f099&X-Amz-SignedHeaders=host&response-content-disposition=inline";
</script>

<footer class="bg-black border-t border-[#3a3a3a] text-white relative z-[1] box-border text-shadow-sm antialiased">
    <div class="max-w-none py-8 md:py-[50px] w-[calc(100%-32px)] md:w-[calc(100%-120px)] mx-4 md:mx-[60px] flex flex-col">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-6 md:mb-[30px]">
            <div class="text-xl md:text-2xl leading-[29px] mb-6 md:mb-0 mt-[2px] font-['Benton_Sans_Book',_sans-serif]">
                {#if footerData.companyName}
                    <img src={logoUrl} alt="{footerData.companyName} Logo" class="h-10 md:h-12" />
                {:else}
                    {footerData.companyName}
                {/if}
            </div>
            
            <div class="flex items-center mb-6 md:mb-0 order-3 md:order-none">
                {#each footerData.socialLinks as social, i}
                    <a href={social.url} target="_blank" title={social.title} class="flex items-center justify-center bg-transparent border border-[#3a3a3a] rounded-full h-[30px] w-[30px] mr-3 md:mr-4 transition-all duration-300 ease-in-out hover:bg-[#3a3a3a]">
                        {@html social.icon}
                    </a>
                {/each}
            </div>
        </div>
        
        <div class="flex flex-col md:flex-row md:justify-between">
            <div class="flex flex-col md:flex-row items-start md:items-center mb-6 md:mb-0 order-1">
                {#each footerData.footerLinks as link, i}
                    <a href={link.url} target={link.target} class="text-sm leading-[17px] mb-4 md:mb-0 md:mr-10 bg-gradient-to-b from-white to-white bg-no-repeat bg-[length:100%_1px] bg-bottom block font-['Benton_Sans_Book',_sans-serif] relative text-white hover:opacity-80">
                        {link.text}
                    </a>
                {/each}
            </div>
            
            <div class="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between mt-0 order-2 md:order-none">
                <div class="text-sm leading-[17px] mb-2 md:mb-0 md:mr-5 font-['Benton_Sans_Book',_sans-serif] tracking-[-0.14px]">
                    <a href={footerData.creditInfo.url} target="_blank" class="bg-gradient-to-b from-white to-white bg-no-repeat bg-[length:100%_1px] bg-bottom relative text-white hover:opacity-80">{footerData.creditInfo.text}</a>
                </div>
                <div class="text-sm leading-[17px] font-['Benton_Sans_Book',_sans-serif] tracking-[-0.14px]">
                    © {footerData.creditInfo.year}
                </div>
            </div>
        </div>
    </div>
</footer>