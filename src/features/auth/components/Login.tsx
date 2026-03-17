import { SubmitHandler, useForm } from "react-hook-form"
import { loginSchema, type LoginUser } from "../schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"

const Login = () => {

    const { register, formState: { errors } } = useForm<LoginUser>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<LoginUser> = 


  return (
    <div className="h-screen w-screen flex">
        <div className="w-1/2 h-full">
            <div className="mx-auto">
                <div>
                    <h1>Bon retour</h1>
                    <p>Connectez vous pour accéder aux informations du secrétariat de Esgis.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-3">
                        <label htmlFor="email" className="font-semibold">Nom de famille</label>
                        <div className="input-style">
                            <User />
                            <input {...register('email')} className="outline-none flex-1 py-3 pl-2" type="email" name="email" id="email" />
                        </div>
                            {errors.email?.message && (<span className="error-message">{errors.email?.message}</span>)}
                    </div>

                    <div className="my-3">
                        <label htmlFor="password" className="font-semibold">Prénom</label>
                        <div className="input-style">
                            <User />
                            <input {...register('password')} className="outline-none flex-1 py-3 pl-2" type="text" name="password" id="password" />
                        </div>
                            {errors.password?.message && (<span className="error-message">{errors.password?.message}</span>)}
                    </div>
                    <button type="submit" className="bg-[#c41c2d] w-full text-white py-3 rounded-lg my-6 cursor-pointer active:bg-[#d15c68] flex gap-3 justify-center shadow-lg shadow-[#d15c68]">
                        {isPending && (<Spinner color="white" height="24" width="24" visible={true} />)}
                        <p>{ isPending ? "Chargement" : "S'inscrire en tant que sécrétaire" }</p>
                    </button>
                    <p>Vous avez déjà un compte sécrétaire ? <span className="text-[#c41c2d] font-semibold">Connectez-vous !!</span></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
