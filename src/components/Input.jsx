export default function Input({label, $invalid, ...props }) {

  let labelClass = "mb-1 text-xs font-bold tracking-wide uppercase";
  let inputClass = "w-full px-3 py-2 rounded leading-tight shadow focus:outline-none focus:shadow-outline";

  if($invalid){
    labelClass += " text-red-600"
    inputClass += " text-red-600 bg-red-200 border border-red-600 focus:outline-none"
  }else{
    labelClass += " text-amber-400"
    inputClass += " text-amber-700 bg-amber-200"
  }

  return (
    <>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </>
  );
}
