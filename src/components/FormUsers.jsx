import { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUsers.css'

const FormUsers = ({createNewUser, updateInfo,updateUserById, setUpdateInfo, setIsCloseForm}) => {

    const {register, handleSubmit, reset} = useForm()

    useEffect(()=>{
        reset(updateInfo)
    },[updateInfo])

    const submit = (data) => {

        if(updateInfo){
            updateUserById('/users', updateInfo.id,data )
            setUpdateInfo()
        }else{
            createNewUser('/users',data)

        }

        reset({
            email:"",
            password: "",
            first_name:"",
            last_name:"",
            birthday:"",
        })

        setIsCloseForm(true)
    }

    const handleCloseForm = ()=>{

        reset({
            email:"",
            password: "",
            first_name:"",
            last_name:"",
            birthday:"",
        })

        setIsCloseForm(true)
        setUpdateInfo()
    }

    return (
        <form className="form" onSubmit={handleSubmit(submit)}>
            <h2 className="form_title">Register Users</h2>
            <div className="form_x" onClick={handleCloseForm}>X</div>
        <div className="form_section">
            <label className="form_label" htmlFor="email">Email </label>
            <input className="form_input" {...register('email')} type="text" placeholder="correo@correo.com"/>
        </div>
        <div className="form_section">
            <label className="form_label" htmlFor="password">Password </label>
            <input className="form_input" {...register('password')} type="password" placeholder="password"/>
        </div>
        <div className="form_section">
            <label className="form_label" htmlFor="first_name">First Name </label>
            <input className="form_input" {...register('first_name')} type="text" placeholder="Pedro, Ana, Carlos..."/>
        </div>
        <div className="form_section">
            <label className="form_label" htmlFor="last_name">Last Name </label>
            <input className="form_input" {...register('last_name')} type="text" placeholder="Castro, Rodriguez..."/>
        </div>
        <div className="form_section">
            <label className="form_label" htmlFor="birthday">Birthday </label>
            <input className="form_input" {...register('birthday')} type="date" />
        </div>
        <button className="form_btn">{updateInfo ? 'Update' : 'Create User'}</button>
        </form>
    );
};

export default FormUsers;
