"use client"
import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/Title/Title";
import { Auth } from "@/app/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const Navigation = useRouter()
  const handleLogin = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(Auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      if(user){

        alert("Dang nhap thanh cong")
        Navigation.push("/")
      }
    }).catch(error => {
      console.log(error)
      alert("dang nhap khong chinh xac")
    })

  }
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <div className="text-center">
          <Title
            text="Đăng Nhập Tài Khoản" 
          />
        </div>
        <form className="" onSubmit={handleLogin}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Ví dụ: levana@gmail.com"
            required={true}
          />
          <FormInput
            label="Mật Khẩu"
            type="password"
            name="password"
            id="password"
            required={true}
          />
          <FormButton text="Đăng Nhập" />
        </form>
      </div>
    </>
  );
}