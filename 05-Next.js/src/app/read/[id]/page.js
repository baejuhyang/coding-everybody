import React from 'react';

export default async function Read({ params }) {
    const { id } = await params; // // 비동기적으로 접근
    const resp = await fetch(`http://localhost:9999/topics/${id}`);
    const topic = await resp.json();

    return (
        <div>
            <h2>{topic.title}</h2>
            {topic.body}
        </div>
    );
}
