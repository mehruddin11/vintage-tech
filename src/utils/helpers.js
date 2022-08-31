export function FeaturedProducts(data){
    return data.filter((item)=>{
        return item.featured == true;
    })
}