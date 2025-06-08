'use client'; // client component로
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Control() {
    const params = useParams();
    // console.log(params); // {id: '1'} // 해당하는 글의 id값을 가져옴
    const id = params.id;

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
                        <input type="button" value="Delete" />
                    </li>
                </>
            ) : null}
        </ul>
    );
}
