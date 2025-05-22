# Frontend Mentor - Solución para componentes de código QR

Esta es una solución al [desafío de componentes de código QR en Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de programación mediante la creación de proyectos realistas.

## Índice

- [Frontend Mentor - Solución para componentes de código QR](#frontend-mentor---solución-para-componentes-de-código-qr)
  - [Índice](#índice)
  - [Resumen](#resumen)
    - [Capturas de pantalla](#capturas-de-pantalla)
  - [Versión de escritorio](#versión-de-escritorio)
  - [Versión Móvil](#versión-móvil)
    - [Enlaces](#enlaces)
  - [Mi proceso](#mi-proceso)
    - [Creado con](#creado-con)
    - [Lo que aprendí](#lo-que-aprendí)
    - [Desarrollo continuo](#desarrollo-continuo)
    - [Recursos útiles](#recursos-útiles)
  - [Autor](#autor)

## Resumen

### Capturas de pantalla

## Versión de escritorio

![](../public/frontendMentor-qr_desktop.png)

## Versión Móvil

![](../public/frontendMentor-qr_mobile.png)

### Enlaces

- Solution URL: [Add solution URL here](https://github.com/gabriel073/git-test/)
- Live Site URL: [Add live site URL here](https://frontendmentor-qrapp.netlify.app/)

## Mi proceso

### Creado con

- Semantic HTML5 markup
- CSS custom properties - with tailwind UI
- Flexbox - with tailwind UI
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind UI](https://tailwindcss.com/) - For styles

### Lo que aprendí

Esta experiencia me ayudó a fortalecer y practicar más con Flexbox y TailwindUI, y a construir toda la estructura desde cero con React JS y Tailwind UI. Fue muy divertido hacerlo todo manualmente, por así decirlo.

Aquí tienes un ejemplo de cómo simplifica todo en un componente de React:

```Component React
function CardQr() {
    return (
        <main className="flex flex-col w-[20rem] h-[31rem] bg-white p-3 rounded-xl  shadow-xl" >
            <img src={img} className=" rounded-xl mb-4" alt="image_qr_code" />
            <div className='flex flex-col'>
                <h1 className='text-2xl text-center font-[Outfit] font-bold text-slate-900 mb-4'>Improve your front-end skills by building projects</h1>
                <p className='text-center font-[Outfit] text-[15px] font-normal text-slate-500 mb-6'>Scan the QR code to visit Frontend Mentor and take your coding skills to <br/>the next level
                </p>
            </div>
        </main>
    )
}
export default CardQr;
```

### Desarrollo continuo

Me gustaría seguir diseñando componentes y desarrollando interacciones de usuario, diferentes acciones y eventos según lo requiera el proyecto utilizando nuevas tecnologías, por ejemplo, NextJS.

### Recursos útiles

- [Recurso de ejemplo 1](https://tailwindcss.com/) - Con Tailwind UI, puedo integrar fácilmente CSS moderno en el mismo componente, lo que me permite avanzar más rápido en el proceso.
- [Recurso de ejemplo 2](https://react.dev/) - Con ReactJS, creé un componente simple que puede reutilizarse y modularizarse a medida que el proyecto crece en el futuro.

## Autor

- Portfolio - [Gabriel Marzioli](https://portfolio-fullstack-pi.vercel.app/)
- Frontend Mentor - [@gabriel073](https://www.frontendmentor.io/profile/gabriel073)
- Twitter - [@GabyDev73](https://x.com/GabyDev73)
- Linkedin - [Gabriel Marzioli](https://www.linkedin.com/in/gabriel-marzioli/)
