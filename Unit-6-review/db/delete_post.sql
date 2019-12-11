DELETE FROM post
WHERE post_id = $1;
SELECT * FROM post 
WHERE user_id = $2