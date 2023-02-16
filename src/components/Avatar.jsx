import styles from './Avatar.module.css';

//Usando a desestruturação em javascript
//Exemplo: const { name } = user;
//Quero tirar o valor da propriedade name do objeto user

export function Avatar({ hasBorder = true, src }) {
    
    return (
        <img 
                className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
                src={src} 
            />
    );
}