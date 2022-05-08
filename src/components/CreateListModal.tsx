import { useState } from 'react';

import Button from './Button';
import Input from './Input';
import Modal from './Modal';

type CreateListModalProps = {
  onClose: () => void;
  open: boolean;
};

export default function CreateListModal(props: CreateListModalProps) {
  const { onClose, open } = props;

  const [listName, setListName] = useState('');

  return (
    <Modal onClose={() => onClose()} open={open}>
      <div className="flex flex-col gap-2">
        <h2>Create a new todo list</h2>
        <Input
          onChange={(v: string) => setListName(v)}
          placeholder="List name"
          value={listName}
        />
        <div className="flex flex-row justify-center gap-2">
          <Button expand outline onClick={() => onClose()} text="Cancel" />
          <Button expand text="Create" />
        </div>
      </div>
    </Modal>
  );
}
