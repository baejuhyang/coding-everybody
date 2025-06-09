'use client';
// 사용자와 상호작용 하는 것은 서버컴포넌트에서 다루지 않으니 클라이언트 컴포넌트로!
import { useRouter } from 'next/navigation'; // mrouter 에서는 uesRouter를 navigation에서 가져와야 한다.
import React from 'react';

export default function Create() {
    // 방금 생성된 것으로 리디렉션 하기
    const router = useRouter();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault(); // onSubmit이 실행됐을 때 기본적인 동작을 방지

                const title = e.target.title.value;
                // e.target // form 태그
                // e.target.title // name이 title인 element

                const body = e.target.body.value; // name이 body인 태그의 value값

                // 이제 서버랑 통신
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // 서버에 전달할 데이터 형식 지 : JSON 데이터를 보낼 것임
                    },
                    body: JSON.stringify({ title, body }), // JS 객체를 JSON 문자열로 변환(서버가 올바르게 해석 할 수 있도록)
                };

                fetch('http://localhost:9999/topics', options)
                    .then((resp) => resp.json())
                    .then((result) => {
                        // 방금 생성한 글로 리디렉션
                        const lastid = result.id;
                        router.push(`/read/${lastid}`);
                        router.refresh(); // 페이지를 새로고침하여 글 목록 정보 데이터 다시 요청
                    });
            }}
        >
            <p>
                <input type="text" name="title" placeholder="title" />
            </p>
            <p>
                <textarea name="body" id="" placeholder="body"></textarea>
            </p>
            <p>
                <input type="submit" value="create" />
            </p>
        </form>
    );
}
