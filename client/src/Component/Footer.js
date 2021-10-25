function Footer(){
    return(
        <footer style={{display: "flex", justifyContent:'space-around', alignItems:'center'}}>
            <div style={{display: "flex", justifyContent:'space-around', width:'350px', alignItems:'center'}}>
            <img src="/DabberRassek2.png" alt='' style={{width:"145px",    height: '65px'}}/>
            
            <div >
            <h4>4 Rue de Béja, Cité Nassim, Mhamdia, Ben Arous 1145</h4>
            
            </div>
            
            </div>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'313px'}}>
                    <h3>Suivez-nous |</h3>
                    <div >
                    <img src="https://img.icons8.com/color/48/000000/facebook.png" alt='' className='icon-project-card'/>
                    
                    </div>
                    <div >
                    <img src="https://img.icons8.com/color/50/000000/gmail--v1.png" alt='' className='icon-project-card'/>
                    
                    </div>
                    <div> 
                    
                    <img src="https://img.icons8.com/office/50/000000/whatsapp--v1.png" alt='' className='icon-project-card' />
                    
                    </div>
                    </div>
        </footer>
    )
}

export default Footer