<template>
  <div class="home">
    <button @click="getUsers">123</button>
    {{ users }}
    <ChatButton />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from 'villus';
import { ref } from 'vue';
import {
  GetAllUsersDocument,
  GetAllUsersQuery,
  User,
} from '../graphql-operations';

const users = ref<User[]>([]);

const getUsers = () => {
  getUsersQuery();
  console.log(usersData.value?.getAllUsers[0]);
  if (usersData.value?.getAllUsers) {
    users.value = usersData.value?.getAllUsers;
  }
};

const { data: usersData, execute: getUsersQuery } = useQuery<GetAllUsersQuery>({
  query: GetAllUsersDocument,
});
</script>
