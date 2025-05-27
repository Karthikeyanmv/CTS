SELECT u.user_id, u.full_name
FROM Users u
WHERE NOT EXISTS (
    SELECT 1
    FROM Registrations r
    WHERE r.user_id = u.user_id
      AND r.registration_date >= CURDATE() - INTERVAL 90 DAY
);
