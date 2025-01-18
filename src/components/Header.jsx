import './Header.css'

export default function Header() {
  return (
    <div className='header-container'>
        <a href="/"><div className='header-logo'>Logo</div></a>
        <div className='header-botones'>
            <a href="/">HOME</a>
            <a href="/create"><i className="fa-solid fa-plus"></i></a>
        </div>
    </div>
  )
}
