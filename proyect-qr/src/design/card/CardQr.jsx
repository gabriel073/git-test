import img from '../../images/image-qr-code.png'
function CardQr() {
    return (
        <main className="flex flex-col w-[20rem] h-[31rem] bg-white p-3 rounded-xl  shadow-xl" >
            <img src={img} className=" rounded-xl mb-4" alt="image_qr_code" />
            <div className='flex flex-col'>
                <h1 className='text-2xl text-center font-[Outfit]  font-bold text-slate-900  mb-4'> Improve your front-end skills by building projects</h1>
                <p className='text-center font-[Outfit] text-[15px] font-normal text-slate-500 mb-6'>
                    Scan the QR code to visit
                    Frontend Mentor and take your coding skills to <br />the next level
                </p>
            </div>
        </main>
    )
}
export default CardQr;