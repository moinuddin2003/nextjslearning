"use server"

export async function submitForm(formData: FormData) {
    const name = formData.get("name")
    const email = formData.get("email")

    console.log(email);
    console.log(name);
}
