export function FeaturedProducts(data){
    return data.filter((item)=>{
        return item.attributes.featuredProduct === true;
    })
}