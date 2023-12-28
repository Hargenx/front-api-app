import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/tarefas');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  const addTask = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/tarefas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titulo: newTaskTitle }),
      });
      if (response.ok) {
        await fetchTasks();
        setNewTaskTitle('');
      } else {
        console.error('Falha ao adicionar tarefa');
      }
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/tarefas/${taskId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        await fetchTasks();
      } else {
        console.error('Falha ao excluir tarefa');
      }
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTaskTitle}
          onChangeText={setNewTaskTitle}
          placeholder="Nova Tarefa"
        />
        <Button title="Adicionar" onPress={addTask} />
      </View>
      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.titulo}</Text>
            <Button title="Excluir" onPress={() => deleteTask(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 10,
    flex: 1,
  },
  list: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
});

