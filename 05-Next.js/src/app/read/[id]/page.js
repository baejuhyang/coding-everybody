import React from 'react';

export default async function Read(props) {
    const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`);
    const topic = await resp.json();
    console.log(topic);

    return (
        <div>
            {/* parameter : {props.params.id} */}

            <h2>{topic.title}</h2>
            {topic.body}
        </div>
    );
}
