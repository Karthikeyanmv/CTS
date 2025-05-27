-- Using subquery:
SELECT event_id, title, session_count FROM (
    SELECT e.event_id, e.title, COUNT(s.session_id) AS session_count
    FROM Events e
    LEFT JOIN Sessions s ON e.event_id = s.event_id
    GROUP BY e.event_id, e.title
) AS event_sessions
WHERE session_count = (
    SELECT MAX(session_count) FROM (
        SELECT COUNT(session_id) AS session_count FROM Sessions GROUP BY event_id
    ) AS counts
);
