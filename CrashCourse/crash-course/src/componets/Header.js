import Button from './Button'
const Header = () => {
    const onClick = () => {
        console.log("clicked")
    }
    return (
        <header className='mainHeader'>
            <h1 className='title'>Task Tracker</h1>
            <Button color='red' text='Add' onClick={onClick}/>
        </header>
    )
}

export default Header
