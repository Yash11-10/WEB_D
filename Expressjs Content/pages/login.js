export default function login(){
    return `<form action="/submit" method="post">
        <input type="text" placeholder="Enter Name" />
        <br/>
        <br/>
        <input type="password" placeholder="Enter Password"/>
        <br/>
        <br/>
        <button>Login</button>
        </form> 
        <a href = "/">Go to home page</a>` 
        
}