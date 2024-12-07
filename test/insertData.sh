#!/bin/bash

API_URL="http://192.168.0.106:9090/api/incidents"

for ((i=1; i<=20; i++))
do
  TITLE="Incident Title $i"
  DESCRIPTION="Description for incident $i"
  LOCATION="Location $i"
  SEVERITY=$((RANDOM % 5 + 1))
  STATUS=$([ $((RANDOM % 2)) -eq 0 ] && echo "Open" || echo "Closed") # 随机生成状态
  
  JSON_BODY=$(cat <<EOF
{
  "accidentId": $i,
  "title": "$TITLE",
  "description": "$DESCRIPTION",
  "location": "$LOCATION",
  "severity": $SEVERITY,
  "status": "$STATUS"
}
EOF
)

  echo "Sending data: $JSON_BODY"

  curl -X POST -H "Content-Type: application/json" -d "$JSON_BODY" "$API_URL"

  sleep 1
done

echo "All data has been sent."
