import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UserCard({ celebDetails, id, handleDelete }) {
  return (
    <React.Fragment key={id}>
      <Card
        sx={{
          width: 345,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={celebDetails?.imageUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {celebDetails?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {celebDetails?.about}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link className="edit-celeb" to={`edit-celeb/${id}`}>
              <Button size="small" color="primary">
                <EditIcon fontSize="10px" style={{ marginRight: "5px" }} />
                Edit
              </Button>
            </Link>
            <a href={celebDetails?.wikiUrl} target="_blank" rel="noreferrer">
              <InfoIcon />
            </a>
          </div>

          <DeleteIcon
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => handleDelete(id)}
          />
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
