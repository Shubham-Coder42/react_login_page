export default function Button({children, ...props}){
  return(
    <button className="py-2 px-4 font-semibold rounded text-stone-900 bg-amber-500 hover:bg-amber-600" {...props}>{children}</button>
  )
}