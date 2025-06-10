'use client'; // client component로
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function Control() {
    const params = useParams();
    // console.log(params); // {id: '1'} // 해당하는 글의 id값을 가져옴
    const id = params.id;
    const router = useRouter();

    return (
        <ul>
            <li>
                <Link href="/create">Create</Link>
            </li>
            {id ? (
                <>
                    <li>
                        <Link href={`/update/${id}`}>Update</Link>
                    </li>
                    <li>
                        <input
                            type="button"
                            value="Delete"
                            onClick={() => {
                                const options = { method: 'DELETE' };
                                fetch(
                                    `${process.env.NEXT_PUBLIC_API_URL}topics/${id}`,
                                    options
                                )
                                    .then((resp) => resp.json())
                                    .then((result) => {
                                        // 삭제 시 홈으로 리디렉션
                                        router.push(`/`);
                                        router.refresh();
                                    });
                            }}
                        />
                    </li>
                </>
            ) : null}
        </ul>
    );
}
