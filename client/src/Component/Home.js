import { useHistory } from "react-router"
import Footer from "./Footer";

function Home(){
    
    const history =useHistory()
    
    return(
      <div>
        <br/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}>
          <div style={{width:'480px'}}>
              <div>
                <h1 style={{color:'#ffcd00'}}>Nous concevons l'avenir du travail.</h1>
              </div>
              <div>
                <h2>DABBER RASSEK donne aux travailleurs à temps partiel la liberté de structurer leur vie professionnelle et met à disposition des entreprises des travailleurs motivés et flexibles.</h2>
              </div>
              <button style={{color:'rgb(255, 205, 0)'}} onClick={()=>history.push('/SignIn')}>Chercher du travail</button>
            </div>
            <img src='/Ilene.png' alt='' style={{width:'425px'}}/>
        </div>
      

        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-around',borderBottom: '1px solid rgba(0, 0, 0, 0.5)',backgroundColor:'rgb(255, 205, 0)',paddingBottom: '100px',paddingTop: '100px'}}>
       
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',flexDirection:'column'}} >
          <img src="/DabberRassek1.png" alt='' style={{width:"300px"}}/>
          <h2 style={{width:'200px'}}>Tout dans une seule application</h2>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',flexDirection:'column'}}>
          <img src="/tunisia.png" alt='' style={{width:"120px"}}/>
          <h2 style={{width:'200px'}}>Des offres valables sur toutes la tunisie</h2>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',flexDirection:'column'}}>
          <img src="/appN.png" alt='' style={{width:"200px"}}/>
          <h2 style={{width:'220px'}}>Aucune application nécessaire à installer</h2>
          </div>
        </div>
       
                          
          <div  style={{display:'flex',justifyContent:"space-around",borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}>
          <div>
            <h1 style={{fontSize: '89px',width: '450px'}}>
              Votre temps,vos règles.
            </h1>
            <button style={{color:'rgb(255, 205, 0)'}} onClick={()=>history.push('/SignIn')}>S'inscrire</button>
          </div>
          <div>
           <h1 style={{width:'716px'}}>Vous pouvez vous inscrire si vous occupez un emploi permanent et souhaitez un revenu supplémentaire en plus de votre revenu principal.</h1>
           <img src='/angham.jpg' alt=''/>
          </div>
          </div>


        <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'space-around',borderBottom: '1px solid rgba(0, 0, 0, 0.5)',backgroundColor:'rgb(255, 205, 0)',paddingBottom: '100px',paddingTop: '100px'}}>
          <h1>
             Nous contacter par mail ? 
          </h1>
          <img style={{width:'180px'}} src='email.png' alt=''/>
          <a style={{color:'black',fontWeight: '800',fontSize: '25px'}} href = "mailto: mzaouchi@gmail.com">Envoyer un Email</a>
        </div>
        <Footer/>
        </div>
      
    )
}

export default Home