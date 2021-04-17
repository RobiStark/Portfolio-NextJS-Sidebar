import Layout from  '../components/Layout';
import Error from './_error';

const GitHub = ({user, statusCode}) =>{

    /* if(statusCode){
        return <Error statusCode={statusCode}/>
    } */

    return(

        <Layout  footer={false} dark>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>RobiStark</h1>
                        <img src="https://avatars.githubusercontent.com/u/41454126?v=4" alt=""/>
                        <p>Desarrollos fullStack con Node, creación de wep y app responsiva</p>
                        <a href="#" target="_blank" className="btn btn-outline-secondary my-2">My Blog</a>
                        <a href="https://github.com/RobiStark" target="_blank" className="btn btn-outline-secondary my-2">My Go to GitHub</a>
                    </div>
                </div>
            </div>
        </Layout>
    
    )

} 

/* export async function getServerSideProps(){
    const res = await fetch ('https://api.github.com/users/RobiStark')
    const data = await res.json();

   const statusCode = res.status > 200 ? res.status : false;

    return{
        props:{
            user: data,
            statusCode
        }
    }
} */

export default GitHub;
