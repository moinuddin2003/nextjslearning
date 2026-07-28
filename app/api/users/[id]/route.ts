import { NextResponse } from "next/server";


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params;

  return NextResponse.json({
    message: "Single User",
    id
  });
}
export async function PUT(request:Request, { params }: {params: Promise<{id: string}>}){
    const body = await request.json();
    const {id} = await params;

    console.log(body);
console.log(id);

return NextResponse.json({
    "message" : "USer Updated"
});
}

export async function PATCH(request:Request , {params}: {params: Promise<{id:string}>}) {
    const body = await request.json();
    const {id } = await params;

    console.log("Update User" , id);
    console.log(body);

    return NextResponse.json({
        message: "User updated",
        id,
        data:body
    })
}

export async function DELETE(request: Request, {params} : {params: Promise <{id:string}>} ) {

    const {id } = await params;

    console.log("Delelte User" , id);

    return NextResponse.json({
        message: "User Deelted",
        id,
    })
}