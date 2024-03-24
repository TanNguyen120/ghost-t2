export const dynamic = 'force-dynamic'; // defaults to auto
// get all pic from cloudinary
export async function GET(request) {
    const r = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`,
        {
            mode: 'no-cors',
            headers: {
                Authorization: `Basic ${Buffer.from(
                    process.env.CLOUDINARY_API_KEY +
                    ':' +
                    process.env.CLOUDINARY_API_SECRET
                ).toString('base64')}`,
            },
        }
    );
    const json = await r.json();
    console.log(json);
    return Response.json({ json })
}
