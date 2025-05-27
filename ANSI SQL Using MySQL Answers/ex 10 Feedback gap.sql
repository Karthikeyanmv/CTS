SELECT e.event_id, e.title
FROM Events e
WHERE EXISTS (
    SELECT 1 FROM Registrations r WHERE r.event_id = e.event_id
)
AND NOT EXISTS (
    SELECT 1 FROM Feedback f WHERE f.event_id = e.event_id
);
