
function CategoryCard({category}){
    return(
        <div className="m-2">
         <img className="rounded" src={category.categoryUrl} alt="Logo" />
         <p>{category.category}</p>
        </div>
    )
}

export default CategoryCard;