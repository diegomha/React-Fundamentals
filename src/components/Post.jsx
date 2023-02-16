import { format, formatDistanceToNow } from  'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post(posts){
    
    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(posts.publishedAt);

    const publishedDateFormatted = format(posts.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateFormattedDateTime = format(posts.publishedAt, "Y-MM-dd HH:mm:ss", {
        locale: ptBR
    });

    const publishDateRelativeToNow = formatDistanceToNow(posts.publishedAt, {
        locale: ptBR, 
        addSuffix: true
    });
 
    const [newCommentText, setNewCommentText] = useState('');

    const [comments, setComments] = useState([]);
    
    //handle quando a ação veio de um usuário
    //Pode ser modificado pelo padrão que quiser
    function handleCreateNewComment()
    {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleCommentTextChange()
    {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete)
    {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return commentToDelete != comments
        });

        setComments(commentsWithoutDeleteOne);
    }

    function handleNewCommentInvalid()
    {
        event.target.setCustomValidity('Este campo é obrigatório!');
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={posts.author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{posts.author.name}</strong>
                        <span>{posts.author.role}</span>
                    </div>                
                </div>

                <time title={publishedDateFormatted} dateTime={publishedDateFormattedDateTime}>
                    {publishDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {posts.content.map(item => {
                    if (item.type == 'paragraph')
                        return <p key={item.content}>{item.content}</p>;
                    else
                        return <p key={item.content}><a href='#'>{item.content}</a></p>;
                })}
            </div>
            
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea 
                    name="commentText" 
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleCommentTextChange} 
                    required={true}
                    onInvalid={handleNewCommentInvalid}
                />
                
                <footer>
                    <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(commentItem => {
                    return (
                        <Comment 
                            key={commentItem} 
                            content={commentItem} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    );
}