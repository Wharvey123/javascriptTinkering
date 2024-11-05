import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import axiosVue from '@/views/APIAxios.vue';

vi.mock('axios');

describe('axios.vue', () => {
    it('loads users correctly', async () => {
        const mockUsers = {
            users: [
                {
                    id: 1,
                    firstName: "Emily",
                    lastName: "Johnson",
                    age: 28,
                    email: "emily.johnson@x.dummyjson.com",
                    phone: "+81 965-431-3024",
                    address: {
                        city: "Phoenix",
                        state: "Arizona"
                    },
                    image: "https://dummyjson.com/icon/emilys/128"
                },
                {
                    id: 2,
                    firstName: "Michael",
                    lastName: "Williams",
                    age: 35,
                    email: "michael.williams@x.dummyjson.com",
                    phone: "+49 258-627-6644",
                    address: {
                        city: "Houston",
                        state: "Texas"
                    },
                    image: "https://dummyjson.com/icon/michaelw/128"
                }
            ]
        };

        axios.get.mockResolvedValueOnce({ data: mockUsers });
        const wrapper = mount(axiosVue);
        await wrapper.vm.$nextTick();
        await new Promise(resolve => setTimeout(resolve, 100));

        const users = wrapper.findAll('li');
        expect(users.length).toBe(2);

        const userText0 = users[0].text();
        expect(userText0).toContain('Emily Johnson');
        expect(userText0).toContain('Email: emily.johnson@x.dummyjson.com'); // Ensure template has "Email: "
        expect(userText0).toContain('Address: Phoenix, Arizona'); // Adjust to match rendered output

        const userText1 = users[1].text();
        expect(userText1).toContain('Michael Williams');
        expect(userText1).toContain('Email: michael.williams@x.dummyjson.com'); // Ensure template has "Email: "
        expect(userText1).toContain('Address: Houston, Texas'); // Adjust to match rendered output

        const userImages = wrapper.findAll('img');
        expect(userImages.length).toBe(2);
        expect(userImages[0].attributes('src')).toBe('https://dummyjson.com/icon/emilys/128');
        expect(userImages[1].attributes('src')).toBe('https://dummyjson.com/icon/michaelw/128');
    });
});
