import LoginDashBoard from "./LoginDashBoard";


export default function Login() {
  return (

    <LoginDashBoard>
      <figure className="w-loginwidth h-loginheight  bg-white rounded-xl p-8 dark:bg-slate-800"   >

        <div className="pt-2 space-y-6">
          <blockquote className="flex items-center justify-center fontsize">
            Welcome
          </blockquote>
          <figcaption className="font-medium">
            <div>
              Email Address
            </div>
            <input type="text" required className="h-10 w-80 p-2 font-semibold rounded-md border border-slate-300 text-slate-900" />
            <div>
            </div>
          </figcaption>
          <blockquote className="pt-40 flex items-center justify-center fontsize">
            <button type="submit" className="p-3 flex  items-center justify-center bg-yellow rounded-md border border-slate-200"> Send Otp</button>
          </blockquote>
        </div>
      </figure>


    </LoginDashBoard>

  )
}
