SELECT e.*
FROM Users u
JOIN Registrations r ON u.user_id=r.user_id
JOIN Events e ON r.event_id=e.event_id
WHERE e.status='upcoming'
AND u.city=e.city
ORDER BY e.start_date;

SELECT e.event_id,e.title,AVG(f.rating) avg_rating
FROM Events e
JOIN Feedback f ON e.event_id=f.event_id
GROUP BY e.event_id,e.title
HAVING COUNT(f.feedback_id)>=10
ORDER BY avg_rating DESC;

SELECT *
FROM Users u
WHERE NOT EXISTS (
SELECT 1
FROM Registrations r
WHERE r.user_id=u.user_id
AND r.registration_date>=CURDATE()-INTERVAL 90 DAY
);

SELECT e.event_id,e.title,COUNT(s.session_id) total_sessions
FROM Events e
LEFT JOIN Sessions s
ON e.event_id=s.event_id
AND TIME(s.start_time) BETWEEN '10:00:00' AND '12:00:00'
GROUP BY e.event_id,e.title;

SELECT u.city,COUNT(DISTINCT r.user_id) total_users
FROM Users u
JOIN Registrations r ON u.user_id=r.user_id
GROUP BY u.city
ORDER BY total_users DESC
LIMIT 5;

SELECT e.event_id,e.title,
SUM(resource_type='pdf') pdf_count,
SUM(resource_type='image') image_count,
SUM(resource_type='link') link_count
FROM Events e
LEFT JOIN Resources r ON e.event_id=r.event_id
GROUP BY e.event_id,e.title;

SELECT u.full_name,f.comments,e.title
FROM Feedback f
JOIN Users u ON f.user_id=u.user_id
JOIN Events e ON f.event_id=e.event_id
WHERE f.rating<3;

SELECT e.event_id,e.title,COUNT(s.session_id) session_count
FROM Events e
LEFT JOIN Sessions s ON e.event_id=s.event_id
WHERE e.status='upcoming'
GROUP BY e.event_id,e.title;

SELECT u.user_id,u.full_name,e.status,COUNT(*) total_events
FROM Events e
JOIN Users u ON e.organizer_id=u.user_id
GROUP BY u.user_id,u.full_name,e.status;

SELECT e.event_id,e.title
FROM Events e
JOIN Registrations r ON e.event_id=r.event_id
LEFT JOIN Feedback f ON e.event_id=f.event_id
GROUP BY e.event_id,e.title
HAVING COUNT(f.feedback_id)=0;

SELECT registration_date,COUNT(*) total_users
FROM Users
WHERE registration_date>=CURDATE()-INTERVAL 7 DAY
GROUP BY registration_date;

SELECT e.event_id,e.title
FROM Events e
JOIN Sessions s ON e.event_id=s.event_id
GROUP BY e.event_id,e.title
HAVING COUNT(s.session_id)=(
SELECT MAX(session_count)
FROM(
SELECT COUNT(*) session_count
FROM Sessions
GROUP BY event_id
)x
);

SELECT e.city,AVG(f.rating) avg_rating
FROM Events e
JOIN Feedback f ON e.event_id=f.event_id
GROUP BY e.city;

SELECT e.event_id,e.title,COUNT(r.registration_id) total_registrations
FROM Events e
LEFT JOIN Registrations r ON e.event_id=r.event_id
GROUP BY e.event_id,e.title
ORDER BY total_registrations DESC
LIMIT 3;

SELECT
s1.event_id,
s1.session_id,
s2.session_id
FROM Sessions s1
JOIN Sessions s2
ON s1.event_id=s2.event_id
AND s1.session_id<s2.session_id
AND s1.start_time<s2.end_time
AND s1.end_time>s2.start_time;

SELECT *
FROM Users u
WHERE u.registration_date>=CURDATE()-INTERVAL 30 DAY
AND NOT EXISTS(
SELECT 1
FROM Registrations r
WHERE r.user_id=u.user_id
);

SELECT speaker_name,COUNT(*) total_sessions
FROM Sessions
GROUP BY speaker_name
HAVING COUNT(*)>1;

SELECT e.event_id,e.title
FROM Events e
LEFT JOIN Resources r ON e.event_id=r.event_id
WHERE r.resource_id IS NULL;

SELECT
e.event_id,
e.title,
COUNT(DISTINCT r.registration_id) total_registrations,
AVG(f.rating) average_rating
FROM Events e
LEFT JOIN Registrations r ON e.event_id=r.event_id
LEFT JOIN Feedback f ON e.event_id=f.event_id
WHERE e.status='completed'
GROUP BY e.event_id,e.title;

SELECT
u.user_id,
u.full_name,
COUNT(DISTINCT r.event_id) events_attended,
COUNT(DISTINCT f.feedback_id) feedback_submitted
FROM Users u
LEFT JOIN Registrations r ON u.user_id=r.user_id
LEFT JOIN Feedback f ON u.user_id=f.user_id
GROUP BY u.user_id,u.full_name;

SELECT
u.user_id,
u.full_name,
COUNT(f.feedback_id) total_feedbacks
FROM Users u
JOIN Feedback f ON u.user_id=f.user_id
GROUP BY u.user_id,u.full_name
ORDER BY total_feedbacks DESC
LIMIT 5;

SELECT
user_id,
event_id,
COUNT(*) duplicate_count
FROM Registrations
GROUP BY user_id,event_id
HAVING COUNT(*)>1;

SELECT
DATE_FORMAT(registration_date,'%Y-%m') month,
COUNT(*) registration_count
FROM Registrations
WHERE registration_date>=CURDATE()-INTERVAL 12 MONTH
GROUP BY DATE_FORMAT(registration_date,'%Y-%m')
ORDER BY month;

SELECT
e.event_id,
e.title,
AVG(TIMESTAMPDIFF(MINUTE,s.start_time,s.end_time)) avg_duration_minutes
FROM Events e
JOIN Sessions s ON e.event_id=s.event_id
GROUP BY e.event_id,e.title;

SELECT
e.event_id,
e.title
FROM Events e
LEFT JOIN Sessions s ON e.event_id=s.event_id
WHERE s.session_id IS NULL;
