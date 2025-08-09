function Header ({title}) {
    return(
        <header className='text-center py-4 bg-purple-400 shadow-md'>
            <h1 className="text-3xl font-bold text-white">{title}</h1>    
        </header>
    );
}

export default Header;