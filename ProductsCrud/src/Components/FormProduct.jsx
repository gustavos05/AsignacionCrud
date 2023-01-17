import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FormProduct = ({ createProductData, productSelectedData, updateProduct }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  

  const getFormData = (data) => {
    
    console.log(data);
    if (productSelectedData) {
      
      updateProduct(data);
    } else {

      createProductData(data);

      resetForm();
    }
  };

  useEffect(() => {
    if (productSelectedData !== null) {
      //Hay elemento seleccionado
      reset(productSelectedData);
    } else {
      //No hay elemento seleccionado
      resetForm();
    }
  }, [productSelectedData]);

  const resetForm = () => {
    reset({
      name: "",
      category: "",
      price: "",
      itsAvailable: false
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(getFormData)}>
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: true
            })}
          />
          {errors.name?.type === "required" && (
            <span role="alert">Este input es requerido</span>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            {...register("category", {
              required: true
            })}
          />
          {errors.name?.type === "required" && (
            <span role="alert">Este input es requerido</span>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="Product-Price">Price</label>
          <input type='number' id="price" {...register("price")} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="isAvailable" className="switch">Available
          <input
            type='checkbox'
            id="isAvailable"
            {...register("isAvailable", {
              required: true
            })}
          className='input'/>
          <div className="rail"><span className="circle"></span></div>
          <span className="indicator"></span>
          {errors.name?.type === "required" && (
            <span role="alert">Este input es requerido</span>
          )}</label>
        </div>


        <button className="btn-edit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormProduct;
