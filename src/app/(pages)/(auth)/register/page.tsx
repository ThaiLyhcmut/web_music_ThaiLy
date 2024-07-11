"use client"
import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/Title/Title";
import { Auth, dbFB } from "@/app/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const Navigation = useRouter()
  const handleRegister = (event: any) => {
    event.preventDefault();
    
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if(fullName && email && password){
      createUserWithEmailAndPassword(Auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          set(ref(dbFB,'users/' + user.uid), {
            fullName: fullName
          }).then(() => {
            alert("Dang Ky Thanh Cong")
            Navigation.push("/")
          })
        }).catch(error => {
          alert("Đăng ký không thành công")
        })
    }
  }
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <div className="text-center">
          <Title
            text="Đăng Ký Tài Khoản" 
          />
        </div>
        <form className="" onSubmit={handleRegister}>
          <FormInput
            label="Họ Tên"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Ví dụ: Le Van A"
            required={true}
          />
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
          <FormButton text="Đăng Ký" />
        </form>
      </div>
    </>
  );
}