const Forminput = ({label , name, type ,defaultValue}) => {
 
  return (
   <div className="mb-4">
  <label className="block text-sm font-medium text-gray-600">
    <span className="label-text capitalize">{label}</span>
   
  </label>
  <input type={type} 
  name={name}
  defaultValue={defaultValue}
   className='mt-1 p-2 w-full border rounded-md text-black'
    />
  
</div>
  )
}
export default Forminput