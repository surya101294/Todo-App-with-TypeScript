import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { editData } from '../Api';
import { Todo } from '../Constants';
import { Fab, Button } from '@mui/material';
import PendingIcon from '@mui/icons-material/Pending';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

interface TodoItemProps extends Todo {
  handleUpdate: () => void;
  handleDelete: (id: number) => void
}
const TodoItem = (prop: TodoItemProps) => {
  const { id, title, status, handleDelete, handleUpdate } = prop

  const handleClick = () => {
    editData(id, !status).then(() => handleUpdate())
  }
 
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '30%', margin: 'auto', border: "2px solid gray", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
      <ListItem
      // secondaryAction={
      //   <IconButton edge="end" aria-label="delete">
      //     <DeleteIcon />
      //   </IconButton>
      //}
      >
      <ListItemText >
          {title}
        </ListItemText >
        {status ? <Fab size="small" color="success" ><AssignmentTurnedInIcon /></Fab>
          :
          <Fab size="small" color="warning" ><PendingIcon /></Fab>}
        <Button onClick={handleClick}>
          <Fab size="small" color="secondary" >
            <EditIcon />
          </Fab>
        </Button>
        <Button onClick={() => handleDelete(id)}>
          <Fab size="small" color="error" >
            <DeleteIcon />
          </Fab>
        </Button>
      </ListItem>
    </div>
  )
}

export default TodoItem
