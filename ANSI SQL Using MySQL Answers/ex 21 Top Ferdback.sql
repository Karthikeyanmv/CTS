SELECT 
    u.user_id, u.full_name, COUNT(f.feedback_id) AS feedback_submitted
FROM Users u
JOIN Feedback f ON u.user_id = f.user_id
GROUP BY u.user_id, u.full_name
ORDER BY feedback_submitted DESC
LIMIT 5;

