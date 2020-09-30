import React,{Component} from 'react';
import {Media} from 'reactstrap';
class Menu extends Component{

constructor(props){
       super(props);

       this.state={
           dishes:[
               {
               id:0,
               name:'uthapizza',
               image:'assets/images/uthappizza.png',
               category:'mains',
               label:'hot',
               price:'4.99',
               description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer'
               },
               {
                id:1,
                name:'zucchipakoda',
                image:'assets/images/zucchipakoda.png',
                category:'appetizer',
                label:'hot',
                price:'1.99',
                description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                id:2,
                name:'vadonut',
                image:'assets/images/vadonut.png',
                category:'appetizer',
                label:'new',
                price:'4.99',
                description:'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                id:3,
                name:'uthapizza',
                image:'assets/images/elaicheesecake.png',
                category:'desserts',
                label:'',
                price:'4.99',
                description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
           ]
       }
}
render(){
    const menu=this.state.dishes.map((dish)=>{
        return (
            <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                    <Media left middle>
                        <Media object src={dish.image} alt={dish.name}/>
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
            </div> 
        );
    });
    return(
        <div className="container">
       <div className="row">
           <Media list>
               {menu}
           </Media>
       </div>
        </div>
    );
}
}
export default Menu;