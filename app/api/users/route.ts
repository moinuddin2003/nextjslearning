import { NextResponse } from "next/server"

let users = [
        {
            "id": 1,
            "name": "Muhammad",
            "email":"muhammad@gmail.com",
            "age" : 20
        },
        {
            "id": 2,
            "name": "Moinuddin",
            "email":"moin@gmail.com",
            "age" : 30
        }
    ]
export async function GET(){
    return NextResponse.json(users);
}

export async function POST(request:Request) {
    const body = await request.json();
    return NextResponse.json(
        {
            status: "Created Successfully",
            data: body
        },
        {
            statusText:"User Created Successfully",
            status:201
        }
    )
}
