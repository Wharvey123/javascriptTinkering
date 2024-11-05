import { mount } from '@vue/test-utils';
import { it, expect, beforeEach, vi } from 'vitest';
import Fetch from '@/views/APIFetch.vue'; // Adjust the path to your component

// Mock the fetch API
global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "quo vero reiciendis velit similique earum",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            },
        ])
    })
);

// Clear the mock before each test
beforeEach(() => {
    fetch.mockClear();
});

it('loads comments correctly', async () => {
    const wrapper = mount(Fetch); // Mount the Fetch component
    await wrapper.vm.$nextTick(); // Wait for the component to update

    await new Promise(resolve => setTimeout(resolve, 100)); // Wait to simulate loading

    const comments = wrapper.findAll('li'); // Find all list items
    expect(comments.length).toBe(2); // Check that there are two comments

    // Check the content of the first comment
    expect(comments[0].text()).toContain('id labore ex et quam laborum');
    expect(comments[0].text()).toContain('Eliseo@gardner.biz');
    expect(comments[0].text()).toContain('laudantium enim quasi est quidem magnam voluptate ipsam eos');

    // Check the content of the second comment
    expect(comments[1].text()).toContain('quo vero reiciendis velit similique earum');
    expect(comments[1].text()).toContain('Jayne_Kuhic@sydney.com');
    expect(comments[1].text()).toContain('est natus enim nihil est dolore omnis voluptatem numquam');
});
