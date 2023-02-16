import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment(props){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment()
    {
        props.onDeleteComment(props.content);
    }

    function handleLikeComment()
    {
        setLikeCount(likeCount + 1);

        // No React, se for duplicar o método setLikeCount, ele não replica, isso por que para cada inserção, ele cria um novo contexto
        // para resolver isso, usa-se uma variável ou use function, como exemplo abaixo:
        // setLikeCount((updatedContextCount) => {
        //     return updatedContextCount + 1
        // }); 
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src = 'https:/github.com/diegomha.png' /> 

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Miguel Halcsick</strong>
                            <time dateTime="2023-02-15 16:05:12">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp /> Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}