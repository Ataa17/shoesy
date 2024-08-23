import { products } from "../constants" 
import { ProductCard } from "../components"
const PopularProducts = () => {
  return (
<section id="products" className="max-container max-sm:mt-12">
<div className="flex flex-col justify-start gap-5">
    <h2 className="font-bold text-2xl ">Our   <span className="text-blue-600"> Popular</span> Products</h2>
    <p className="lg:max-w-lg mt-2 text-slate-400">Experience top quality and style with our best and most ordered products</p>
</div>
<div className="grid grid-cols-1 gap-14 mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
    {products.map((product) => {
      return (
        <ProductCard key={product.id} product={product} />
      )
    })}
</div>
</section>  )
}

export default PopularProducts