'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Update() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    const [topic, setTopic] = useState({ title: '', body: '' });

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`)
            .then((resp) => resp.json())
            .then((result) => setTopic(result));
    }, []);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;

                // 서버랑 통신
                const options = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, body }),
                };

                fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, options)
                    .then((resp) => resp.json())
                    .then(() => {
                        // 방금 수정한 글로 리디렉션
                        router.push(`/read/${id}`);
                        router.refresh();
                    });
            }}
        >
            <p>
                <input
                    type="text"
                    name="title"
                    value={topic.title}
                    onChange={(e) => {
                        setTopic({ ...topic, title: e.target.value });
                    }}
                />
            </p>
            <p>
                <textarea
                    name="body"
                    id=""
                    value={topic.body}
                    onChange={(e) => {
                        setTopic({ ...topic, body: e.target.value });
                    }}
                />
            </p>
            <p>
                <input type="submit" value="update" />
            </p>
        </form>
    );
}
