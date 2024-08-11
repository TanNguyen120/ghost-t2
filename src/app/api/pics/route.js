export const dynamic = 'force-dynamic'; // defaults to auto

// get all pic from cloudinary
export async function GET(request) {
    const nextCursor = request.nextUrl.searchParams.get("next_cursor");
    let url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image?max_results=30`
    if (nextCursor && nextCursor !== '') {
        url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image?max_results=30&next_cursor=${nextCursor}`
    }
    const r = await fetch(
        url,
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
    console.log(
        r.headers);
    return Response.json({ json })
}
