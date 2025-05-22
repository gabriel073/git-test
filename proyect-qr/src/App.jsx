
import './App.css'
import CardQr from './design/card/cardQr'


function App() {
  return (
    <div className='flex flex-col min-h-screen min-w-screen justify-between'>
      <div className='m-auto'>
        <CardQr />
      </div>

      <div className='flex flex-col p-2'>
        <div class="attribution">
          <span className='text-slate-500'>Challenge by </span>
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor.</a
          > <span className='text-slate-500'> Coded by </span>
          <a href="https://portfolio-fullstack-pi.vercel.app/" target="_blank"
          >Gabriel Marzioli.</a
          >
        </div>
      </div>
    </div>
  )
}

export default App
